import type { Metadata } from "next"
import "./globals.css"
import "./page.module.css"
import { Provider } from "@/components/ui/provider"
import ApolloWrapper from "@/components/ApolloWrapper"
import UserInfoGateWrapper from "@/components/UserInfoGateWrapper"
import { AccessWrapper } from "@/components/AccessWrapper"
import AppLayout from "@/components/ui/AppLayout"
import { UserInfoWrapper } from "@/components/UserInfoWrapper"

export const metadata: Metadata = {
  title: "Characters of Rick and Morty",
  description: "By Shamim",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ApolloWrapper>
          <Provider>
            <AccessWrapper>
              <UserInfoGateWrapper>
                <UserInfoWrapper>
                  <AppLayout>{children}</AppLayout>
                </UserInfoWrapper>
              </UserInfoGateWrapper>
            </AccessWrapper>
          </Provider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
