import { RuleConfigSeverity, UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'release',
        'style',
        'test',
      ],
    ],
    'scope-enum': [RuleConfigSeverity.Disabled], // Allow any scope
    'scope-empty': [RuleConfigSeverity.Disabled], // Allow commits without a scope
    'scope-case': [RuleConfigSeverity.Error, 'always', 'kebab-case'], // Use kebab-case for scopes
    'scope-max-length': [RuleConfigSeverity.Error, 'always', 50], // Limit scope length to 50 characters
    'scope-min-length': [RuleConfigSeverity.Error, 'always', 2], // Require scope to be at least 2 characters
  },
};

export default Configuration;
