from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from time_man_app.models import User, Task, Collection

"""
    TEMPLATES
"""

def index(request):
    return render(request, "cash/index.html")

def homepage(request):
    if 'user_id' not in request.session:
       messages.error(request, 'Must be logged in')
       return redirect('/')
    return render(request, "cash/homepage.html")

""""""""""""
"""
    LOGIN / REGISTER / LOGOUT
"""

def register(request):
    post = request.POST
    errors = User.objects.basic_validator(post)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/cashtask')
    lowerCaseEmail = post['email'].lower()
    if User.objects.filter(email = lowerCaseEmail).exists():
        messages.error(request, "That email already exists")
        return redirect('/cashtask')
    capitalizedFirstName = post['first_name'].capitalize()
    capitalizedLastName = post['last_name'].capitalize()
    password = post['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    user = User.objects.create(
        first_name = capitalizedFirstName, 
        last_name = capitalizedLastName, 
        email = lowerCaseEmail, 
        password = pw_hash
    )
    Collection.objects.create(
        title = "General",
        desc = "Things that just need to get done.",
        user = user
    )
    request.session['user_id'] = user.id
    return redirect('/cashtask/homepage')

def login(request):
    post = request.POST
    lowerEmail = post['email'].lower()
    try:
        user = User.objects.get(email = lowerEmail)
    except:
        messages.error(request, "Please check your password or email.")
        return redirect('/cashtask')

    if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):
        request.session["user_id"] = user.id
        return redirect('/cashtask/homepage')
    else:
        messages.error(request, "please check your email and password.")
        return redirect('/cashtask')

def logout(request):
    request.session.clear()
    return redirect('/')

"""
    JOB PROCESS
"""
def createJob(request):
    if 'user_id' not in request.session:
       messages.error(request, 'Must be logged in')
       return redirect('/')
    if request.method == "POST":
        post = request.POST
        loggedInUser = User.objects.get(id = request.session["user_id"])
        Job.objects.create(title = post["title"].capitalize(), description = post["description"], price = post["price"], city = post["city"].capitalize(), state = post["state"].upper(), user = loggedInUser)
    else:
        request.session.clear()
        return redirect('/homepage')

def deleteJob(request, id):
    if 'user_id' not in request.session:
       messages.error(request, 'Must be logged in')
       return redirect('/')
    user = User.objects.get(id = request.session["user_id"])
    job = Job.objects.get(id = id)
    if user.id != job.user_id:
        pass


























