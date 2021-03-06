# Generated by Django 2.2.2 on 2019-06-11 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('savingdeposit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deposituser',
            name='emailVerificationCode',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='deposituser',
            name='facebookId',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='deposituser',
            name='googleId',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='deposituser',
            name='retryCount',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='deposituser',
            name='role',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
