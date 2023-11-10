// docs
import gs1 from './1_getting_started.md'
import install from './2_Installation/1_install.md'

// install
import gs2 from './3_Configuration/1_getting_started.md'
import syntax from './3_Configuration/2_syntax.md'
import supported_args from './3_Configuration/3_supported_args.md'
import output_name from './3_Configuration/4_output_name.md'

//cli-tool
import cli_tool from './4_runnr-cli-tool/1_cli_tool.md'
import execution from './4_runnr-cli-tool/2_execution.md'
import custom_output from './4_runnr-cli-tool/3_custom_output.md'
import args from './4_runnr-cli-tool/4_arguments.md'
import working_dir from './4_runnr-cli-tool/5_working_directories.md'
import extras from './4_runnr-cli-tool/6_extras.md'

const docs = [
    {
        title: 'Getting Started',
        link: '#',
        path: gs1
    },
    {
        title: 'Installation',
        link: '#',
        path: install
    },
    {
        title: 'Configurations',
        link: '/docs/config',
        path: ''
    },
    {
        title: 'runnr: cli-tool',
        link: '/docs/runnr',
        path: ''
    }
]

const docs_config = [
    {
        title: 'Getting Started',
        link: '#',
        path: gs2
    },
    {
        title: 'Syntax and Rules',
        link: '#',
        path: syntax
    },
    {
        title: 'Supported Arguments',
        link: '#',
        path: supported_args
    },
    {
        title: 'Output File Name',
        link: '#',
        path: output_name
    },
    {
        title: 'runnr',
        link: '/docs/runnr',
        path: ''
    }
]

const docs_cli = [
    {
        title: 'runnr',
        link: '#',
        path: cli_tool
    },
    {
        title: 'Executing programs',
        link: '#',
        path: execution
    },
    {
        title: 'Custom Output Names',
        link: '#',
        path: custom_output
    },
    {
        title: 'runnr & executor arguments',
        link: '#',
        path: args
    },
    {
        title: 'Paths and Working Directory',
        link: '#',
        path: working_dir
    },
    {
        title: 'More runnr options',
        link: '#',
        path: extras
    }
]

export {docs, docs_config, docs_cli};