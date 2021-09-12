import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
	locales: {
		'/': {
			lang: 'zh-CN',
			title: '青春永不落幕',
			description: '记录软件下载平台和网络学习过程笔记',
		}
	},
	head: [
		['meta', { name: 'keywords', content: '青春永不落幕,技术文档,软件收集' }],
		['meta', { name: 'author', content: 'qcyblm，qcyblm@139.com' }],
		['meta', { property: "og:title", content: "青春永不落幕" }],
		['meta', { property: "og:determiner", content: "记录软件下载平台和网络学习过程笔记" }],
		['meta', { property: "article:author", content: "青春永不落幕" }],
		['meta', { property: "article:tag", content: "VuePress, docs, blog" }],
		['meta', { property: "og:image", content: "/favicon.ico" }],
		['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: "64x64" }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon', sizes: "64x64" }],
	],
	themeConfig: {
		logo: '/assets/img/logo.webp',
		repo: 'https://gitee.com/qcyblm/qcyblm/',
		editLink: true,
		editLinkText: '编辑当前页',
		docsRepo: 'https://gitee.com/qcyblm/qcyblm',
		docsBranch: 'master',
		docsDir: 'docs',
		editLinkPattern: ':repo/edit/:branch/:path',
		darkMode: true,
		contributorsText: '贡献者',
		navbar: [
			{ text: '主页', link: '/', },
			{ text: '关于', link: '/about.html' },
			{ text: '项目', link: '/project.html' },
			{
				text: 'Windows',
				children: ['/windows/software.html', '/windows/wepe.html'],
			},
			{ text: '支持&友链', link: '/support.html' }
		],
		sidebar: {
			'/windows/': ['/windows/software.html', '/windows/wepe.html']
		},
		lastUpdated: true,
		lastUpdatedText: '最后更新时间',
	},
	plugins: [
		[
			'@vuepress/plugin-search', {
				locales: {
					'/': { placeholder: '搜索', },
				},
			},
		],
	],
})
