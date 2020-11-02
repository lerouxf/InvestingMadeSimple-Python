from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect


def suggestions_view(request, *args, **kwargs):
    return render(request, "suggestions.html", {})


def howToInvest_view(request, *args, **kwargs):
    return render(request, "howToInvest.html", {})


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

        return render(request, 'index.html', {'name': name})

    return render(request, "index.html", {})
