from rest_framework import serializers
from savingdeposit.models import DepositUser
from savingdeposit.models import SavingDeposit

class SavingDepositSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingDeposit
        fields = '__all__'

class DepositUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepositUser
        fields = '__all__'