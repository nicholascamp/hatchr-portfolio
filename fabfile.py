# encoding: utf-8

import os

from fabric.api import env
from fabric.contrib.project import rsync_project

env.user = 'hatchr'
env.hosts = ['hatchr.com.br']

env.local_dir = '"%s"' % os.path.join(os.path.dirname(__file__), '')
env.remote_dir = '/home/hatchr/hatchr.com.br/'


def deploy():
	upload_project()


def upload_project():
	rsync_project(
		local_dir=env.local_dir,
		remote_dir=env.remote_dir,
		delete=True,
		exclude='.git',
		extra_opts='--progress --exclude-from=.gitignore'
	)
