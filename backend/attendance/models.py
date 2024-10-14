from django.contrib.auth.models import User
from django.db import models

class Session(models.Model):
    date = models.DateTimeField()
    description = models.TextField()

class Attendance(models.Model):
    player = models.CharField(max_length=100)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    is_attending = models.BooleanField(default=False)
