import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importX from 'eslint-plugin-import-x';
import n8nNodesBase from 'eslint-plugin-n8n-nodes-base';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	globalIgnores(['dist']),
	{
		files: ['**/*.ts'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			importX.configs['flat/recommended'],
		],
		plugins: {
			'n8n-nodes-base': n8nNodesBase,
		},
		settings: {
			'import-x/resolver-next': [createTypeScriptImportResolver()],
		},
		rules: {
			'prefer-spread': 'off',
			'no-console': 'error',
		},
	},
	{
		files: ['package.json'],
		plugins: {
			'n8n-nodes-base': n8nNodesBase,
		},
		rules: {
			...n8nNodesBase.configs.community.rules,
		},
		languageOptions: {
			parser: tseslint.parser,
		},
	},
	{
		files: ['credentials/**/*.ts'],
		plugins: {
			'n8n-nodes-base': n8nNodesBase,
		},
		rules: {
			...n8nNodesBase.configs.credentials.rules,
			'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off',
		},
	},
	{
		files: ['nodes/**/*.ts'],
		plugins: {
			'n8n-nodes-base': n8nNodesBase,
		},
		rules: {
			...n8nNodesBase.configs.nodes.rules,
		},
	},
);
