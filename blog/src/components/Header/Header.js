const { propTypes } = require("gatsby-plugin-image/dist/src/components/gatsby-image.server")

const Header = ({ siteTitle }) => (
<Outer>
    <H1>
        <StyledLink to="/">
            {siteTitle}
        </StyledLink>
    </H1>
</Outer>
)

Header.propTypes = {
    siteTitle: propTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export { Header }