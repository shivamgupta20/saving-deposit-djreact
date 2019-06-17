from .serializers import SavingDepositSerializer, DepositUserSerializer
from rest_framework import viewsets
from savingdeposit.models import SavingDeposit, DepositUser

class SavingDepositViewSet(viewsets.ModelViewSet):
        queryset = SavingDeposit.objects.all()
        serializer_class = SavingDepositSerializer

class DepositUserViewSet(viewsets.ModelViewSet):
        queryset = DepositUser.objects.all()
        serializer_class = DepositUserSerializer


# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
# from savingdeposit.models import SavingDeposit, DepositUser
# from .serializers import SavingDepositSerializer, DepositUserSerializer
# class DepositUserListView(ListAPIView):
#     queryset = DepositUser.objects.all()
#     serializer_class = DepositUserSerializer

# class DepositUserDetailView(RetrieveAPIView):
#     queryset = DepositUser.objects.all()
#     serializer_class = DepositUserSerializer

# class DepositUserCreateView(CreateAPIView):
#     queryset = DepositUser.objects.all()
#     serializer_class = DepositUserSerializer

# class DepositUserUpdateView(UpdateAPIView):
#     queryset = DepositUser.objects.all()
#     serializer_class = DepositUserSerializer

# class DepositUserDestroyView(DestroyAPIView):
#     queryset = DepositUser.objects.all()
#     serializer_class = DepositUserSerializer

