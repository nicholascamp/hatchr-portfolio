# encoding: utf-8

import os

from fabric.api import env
from fabric.contrib.project import rsync_project

with open('.gitignore') as f:
	GITIGNORE = [l.strip() for l in f.readlines()
				if l.strip() and not l.startswith('#')]
	GITIGNORE.append('.git')

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
		exclude=GITIGNORE,
		extra_opts='--progress'
	)
