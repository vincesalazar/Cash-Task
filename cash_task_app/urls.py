from django.urls import path
from . import views

urlpatterns = [
    # TEMPLATES
    path('', views.index),
    path('homepage', views.homepage),
    path("createJob", views.createJobPage),
    # PRACTICE PAGINATION
    path("pagination", views.pagination),
    # LOGIN REG PROCESS
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    # JOB PROCESS
    path('creatingJob', views.createJob),
    path('deleteJob/<int:id>', views.deleteJob),
    path('updateJob/<int:id>', views.updateJob),
    path('pinJob/<int:id>', views.pinJob),
]