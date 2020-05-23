from django.db import models
from time_man_app.models import User

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    city = models.CharField(max_length=100, default="")
    state = models.CharField(max_length = 2, default="")
    user = models.ForeignKey(User, related_name="jobs", on_delete=models.CASCADE, default = "")
    pinned = models.ManyToManyField(User, related_name="pins" , default = "")

    def __repr__(self):
        return f"title: {self.title}, city: {self.city}, user email: {self.user.email}"

# Create your models here.
