import React from 'react'
import { makeStyles, createStyles, Typography, ThemeProvider } from '@material-ui/core'
import { getUrl } from '../utils/utils'
import { getActivatedUI } from '../social-network/ui'
import { MaskbookIcon } from '../resources/Maskbook-Circle-WhiteGraph-BlueBackground'

interface PluginWrapperProps {
    pluginName: string
    children?: JSX.Element | string
    width?: number
}

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            border: `1px solid ${theme.palette.divider}`,
            cursor: 'default',
        },
        header: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1),
        },
        icon: {
            width: '3em',
            height: '3em',
        },
        body: {
            margin: theme.spacing(2),
        },
    }),
)

export default function MaskbookPluginWrapper(props: PluginWrapperProps) {
    const classes = useStyles()
    const { pluginName, children, width } = props
    const theme = getActivatedUI().useTheme()
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.card} style={{ width }}>
                <div className={classes.header}>
                    <MaskbookIcon className={classes.icon}></MaskbookIcon>
                    <div className={classes.title}>
                        <Typography variant="overline">Maskbook Plugin</Typography>
                        <Typography variant="h6">{pluginName}</Typography>
                    </div>
                </div>
                <div className={classes.body}>{children}</div>
            </div>
        </ThemeProvider>
    )
}
