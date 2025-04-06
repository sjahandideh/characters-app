import { Grid, GridItem, Heading, Link, Button } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Grid gap="1rem" justifyItems="center">
      <GridItem>
        <Heading>Welcome to Characters of Rick and Morty</Heading>
      </GridItem>
      <GridItem>
        <Link href="/Information">
          <Button variant="subtle">Checkout the characters</Button>
        </Link>
      </GridItem>
    </Grid>
  )
}

export default HomePage
