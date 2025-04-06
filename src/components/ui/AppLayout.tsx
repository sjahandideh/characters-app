import { Box } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react/grid"
import MainSidebar from "./MainSidebar"
import { ReactNode } from "react"

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      templateAreas={{
        base: `"sidebar" "main"`, // mobile: stacked
        md: `"sidebar main"`, // desktop: side by side
      }}
      gridTemplateColumns={{ base: "1fr", md: "200px 1fr" }}
      gridTemplateRows={{ base: "auto auto", md: "1fr" }}
      height="100vh"
    >
      <GridItem area="sidebar">
        <Box opacity="0.5" padding="1rem">
          <MainSidebar />
        </Box>
      </GridItem>
      <GridItem area="main" padding="1rem">
        <Box>{children}</Box>
      </GridItem>
    </Grid>
  )
}

export default AppLayout
