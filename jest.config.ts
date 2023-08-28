import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  verbose: true,
  rootDir: '.',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  testMatch: ['**/test/*.(spec|test).(j|t)s?(x)'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};

export default config;
