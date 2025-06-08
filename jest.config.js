export const preset = 'ts-jest';
export const moduleNameMapper = {
    '^@/(.*)$': '<rootDir>/$1'
};
export const setupFilesAfterEnv = ['<rootDir>/core/di.ts']