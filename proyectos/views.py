from django.shortcuts import render
from django.http import HttpResponse

def proyectos(request):
    return render(request, 'galeryProject.html')