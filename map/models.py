from django.db import models

# Create your models here.
class History(models.Model):
	adress = models.CharField(max_length=200)
	def __unicode__(self):
		return self.adress	