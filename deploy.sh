#!/usr/bin/env bash

OUTPUT_DIR="output"
GITHUB_REPO="git@github.com:musrex/leo92.git"
BRANCH="gh-pages"

pelican content -s publishconf.py1

cd $OUTPUT_DIR

git init
git remote add origin $GITHUB_REPO

git add .
git commit -m "Publish site to GitHub Pages"

git push --force origin master:$BRANCH

cd ..
rm -rf $OUTPUT_DIR/.git
