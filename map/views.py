from django.shortcuts import render

# Create your views here.
def lol(request):
    return render(request, 'map/index.html')
