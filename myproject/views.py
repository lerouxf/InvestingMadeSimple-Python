from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.core.mail import send_mail
from django.shortcuts import render
from django.views.generic import \
    (ListView, DetailView, CreateView, UpdateView, DeleteView)
from .models import Question


def suggestions_view(request, *args, **kwargs):
    return render(request, "main/suggestions.html", {})


def howToInvest_view(request, *args, **kwargs):
    return render(request, "main/howToInvest.html", {})


def home_view(request, *args, **kwargs):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        # send email
        send_mail(
            name,
            message,
            email,
            ['investingMadeSimpleMail@gmail.com'],
        )

        return render(request, 'main/index.html', {'name': name})

    return render(request, "main/index.html", {})


class QuestionListView(ListView):
    model = Question
    template_name = 'forum/forumIndex.html'
    context_object_name = 'questions'
    ordering = ['-date_posted']


class QuestionDetailView(DetailView):
    model = Question
    template_name = 'forum/question_detail.html'


class QuestionCreateView(LoginRequiredMixin, CreateView):
    model = Question
    template_name = 'forum/question_form.html'
    fields = ['title', 'content']
    login_url = 'login'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


class QuestionUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Question
    template_name = 'forum/question_form.html'
    fields = ['title', 'content']
    login_url = 'login'

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

    def test_func(self):
        question = self.get_object()
        if self.request.user == question.author:
            return True
        return False


class QuestionDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Question
    template_name = 'forum/question_confirm_delete.html'
    success_url = '/forum'

    def test_func(self):
        question = self.get_object()
        if self.request.user == question.author:
            return True
        return False


def forum_view(request):
    context = {
        'questions': Question.objects.all()
    }
    return render(request, 'forum/forumIndex.html', context)