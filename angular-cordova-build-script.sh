#!/bin/bash

dist_folder='dist'

android_project_folder='/home/diyen/IntelliJProjects/biglaundry-app'
www_folder=$android_project_folder'/www'
www_folder_content=$www_folder'/*'

# build project
ng build --base-href . --prod

# remove everything from /www
rm -rf $www_folder_content

cp -a $dist_folder/. $www_folder

cd $android_project_folder

cordova run android
