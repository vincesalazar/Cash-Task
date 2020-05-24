from django.contrib import admin
from time_man_app.models import User, Task, Collection
from cash_task_app.models import Job

admin.site.register(User)
admin.site.register(Task)
admin.site.register(Collection)
admin.site.register(Job)
# Register your models here.
