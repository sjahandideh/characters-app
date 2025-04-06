import { Popover } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react/button"
import { Portal } from "@chakra-ui/react/portal"

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ open, children }: ModalProps) => {
  if (!open) return null

  return (
    <Popover.Root lazyMount unmountOnExit>
      <Popover.Trigger asChild>
        <Button size="sm" variant="outline">
          More Info
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              {/* <Button onClick={() => onClose()}>Close</Button> */}
              {children}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

export default Modal
