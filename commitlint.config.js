module.exports = {
    extends: ['@commitlint/config-conventional'],
    // You can add your custom rules for commit message here.
    // rules: {
    //     // Custom rule to enforce a specific commit message length (e.g., at least 10 characters)
    //     'subject-min-length': [2, 'always', 10], // Minimum length for the commit subject

    //     // Custom rule to allow certain commit types
    //     'type-enum': [
    //         2,
    //         'always',
    //         [
    //             'feat',
    //             'fix',
    //             'docs',
    //             'style',
    //             'refactor',
    //             'perf',
    //             'test',
    //             'chore', // You can add more types here
    //         ],
    //     ],

    //     // Custom rule to enforce that the commit message body must be present if the commit type is 'feat'
    //     'body-max-line-length': [2, 'always', 100], // Ensure body lines don't exceed 100 characters
    //     'footer-max-line-length': [2, 'always', 100], // Ensure footer lines don't exceed 100 characters
    // },
};