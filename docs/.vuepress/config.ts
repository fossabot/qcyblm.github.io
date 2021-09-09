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
		['meta', { name: 'theme-color', content: '#058CF' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }],
		['meta', { name: 'author', content: 'qcyblm，qcyblm@139.com' }],
		['meta', { property: "og:title", content: "青春永不落幕" }],
		['meta', { property: "og:determiner", content: "记录软件下载平台和网络学习过程笔记" }],
		['meta', { property: "article:author", content: "青春永不落幕" }],
		['meta', { property: "article:tag", content: "VuePress, docs, blog" }],
		['meta', { property: "og:image", content: "/favicon.ico" }],
		['meta', { name: 'baidu-site-verification', content: 'code-gxXVYQex35' }],
		['meta', { name: '360-site-verification', content: '83a4c41737558c5308ff60ea6e967e46' }],
		['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: "64x64" }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png', type: 'image/png' }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#0058CF', type: 'image/svg+xml' }],
		['link', { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-icon-114.png', type: 'image/png' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['script', { src: '/js/baidu.js', type: 'text/javascript' }],
		['script', { src: '/js/download.js', type: "text/javascript" }],
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
		navbar: [
			{
				text: '主页',
				link: '/',
			},
			{
				text: '关于',
				link: '/about.html'
			},
			{
				text: '项目',
				link: '/project.html'
			},
			{
				text: 'Windows',
				children: ['/windows/software.html', '/windows/wepe.html'],
			},
			{
				text: '支持&友链',
				link: '/support.html'
			}
		],
		sidebar: {
			'/windows/': ['/windows/software.html', '/windows/wepe.html']
		},
		lastUpdated: true,
		lastUpdatedText: '最后更新时间',
	},
	plugins: [
		[
			'@vuepress/plugin-search',
			{
				placeholder: '搜索',
			},
		],
		[
			'@vuepress/last-updated',
			{
				dateOptions: {
					hour12: false,
					timeZone: 'Asia/Shanghai',
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit'
				}
			}
		],
		['@vuepress/plugin-pwa'],
		[
			'@vuepress/plugin-pwa-popup',
			{
				locales: {
					'/': {
						message: '发现新内容可用',
						buttonText: '刷新',
					},
				},
			},
		],
	],
})
