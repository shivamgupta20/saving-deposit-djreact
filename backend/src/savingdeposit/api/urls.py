from savingdeposit.api.views import SavingDepositViewSet, DepositUserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'deposit', SavingDepositViewSet, basename='savingdeposit')
router.register(r'deposituser', DepositUserViewSet, basename='deposituser')
urlpatterns = router.urls
