# Generated by Django 2.2.2 on 2019-06-11 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('savingdeposit', '0005_auto_20190611_2116'),
    ]

    operations = [
        migrations.AlterField(
            model_name='savingdeposit',
            name='tax',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=4, null=True),
        ),
    ]
