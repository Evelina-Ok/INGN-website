import gridstyle from "./Grid.module.scss"

export const Grid = ({children}) => {
    return (
        <section className={gridstyle.gridStyling}>
            {children}
        </section>
    )
}