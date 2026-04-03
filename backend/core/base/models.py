from django.db import models

# Create your models here.

from  django.contrib.auth.models import Group, User

class Visited(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    counter=models.IntegerField(default=0)

