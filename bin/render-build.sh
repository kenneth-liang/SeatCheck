#! /usr/bin/env bash
# exit on error
set -o errexit

bundle install
# clean
rm -rf public
# build
npm install && npm run build
# migrate
bundle exec rake db:migrate
bundle exec rake db:seed:all
# postbuild
# cp -a frontend/build/. public/