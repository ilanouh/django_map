from django.shortcuts import *

from map.forms import MyForm
from map.models import History


# Create your views here.
def lol(request):
	historic = History.objects.all().order_by('-id')[:10]
	if request.method == 'POST':
		form = MyForm(request.POST)
		if form.is_valid():
			history = History()
			history.adress = form.cleaned_data.get('adress')
			history.save()
			return render(request, 'map/index.html', {'adress': history.adress, 'historic': historic})
	return render(request, 'map/index.html', {'adress': '', 'historic': historic})