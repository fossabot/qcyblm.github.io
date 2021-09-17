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
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon-16x16.png`, },],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/favicon-32x32.png`, },],
		['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
		['meta', { name: 'application-name', content: '青春永不落幕' }],
		['meta', { name: 'apple-mobile-web-app-title', content: '青春永不落幕' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },],
		['link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },],
		['link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#fff', },],
		['meta', { name: 'msapplication-TileColor', content: '#fff' }],
		['meta', { name: 'theme-color', content: '#0058CF' }],
	],
	themeConfig: {
		logo: '/images/logo.webp',
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
			{ text: '关于', link: '/about' },
			{ text: '项目', link: '/project' },
			{
				text: 'Windows',
				children: ['/windows/software', '/windows/wepe'],
			},
			{ text: '导航', link: '/nav' },
			{ text: '支持&友链', link: '/support' }
		],
		sidebar: {
			'/windows/': ['/windows/software', '/windows/wepe']
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
