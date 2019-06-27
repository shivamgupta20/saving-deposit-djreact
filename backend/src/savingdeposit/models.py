from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class DepositUser(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=100, unique=True)
    created_date = models.DateTimeField(auto_now=True)
    role = models.CharField(null = True,blank=True,max_length=30)
    password = models.CharField(max_length=30)
    googleId = models.CharField(null = True,blank=True, max_length=30)
    facebookId = models.CharField (null = True,blank=True, max_length=30)
    isEmailVerified = models.BooleanField(default=False)
    retryCount = models.IntegerField(null = True,blank=True)
    emailVerificationCode = models.CharField(null = True,blank=True, max_length=30)

class SavingDeposit(models.Model):
    userid = models.ForeignKey('DepositUser', on_delete = models.CASCADE)
    created_date = models.DateTimeField(auto_now=True)
    bankname = models.CharField(max_length=30)
    account_number = models.IntegerField()
    initial_amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField(auto_now=False)
    end_date = models.DateField(auto_now=False)
    interest = models.IntegerField()
    tax = models.DecimalField(null = True,blank=True,max_digits=4, decimal_places=2)
    owner = models.ForeignKey(User, related_name="DepositsUsers", on_delete = models.CASCADE, null=True)