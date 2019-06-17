from django.contrib import admin

# Register your models here.
from .models import DepositUser, SavingDeposit

admin.site.register(DepositUser)
admin.site.register(SavingDeposit)