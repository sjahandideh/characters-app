"use client"

import { Center, Box, Button, Field, Fieldset, Input } from "@chakra-ui/react"
import { useAccess } from "./AccessWrapper"
import { useEffect, useState } from "react"
import { useUserInfo } from "./UserInfoWrapper"
import { useUserInfoStorage } from "../hooks/useUserInfoStorage"

type UserInfoForm = {
  headingText: string
  submitText: string
  onHandleSubmitForm?: () => void
}

const UserInfoForm = ({
  headingText,
  submitText,
  onHandleSubmitForm,
}: UserInfoForm) => {
  const { loadUserInfo, saveUserInfo } = useUserInfoStorage()
  const { grantAccess, isBlocked } = useAccess()
  const { setUserInfo } = useUserInfo()

  const [errors, setErrors] = useState({ username: "", jobTitle: "" })
  const [formData, setFormData] = useState({
    username: "",
    jobTitle: "",
  })

  useEffect(() => {
    setFormData(loadUserInfo())
  }, [])

  const validate = () => {
    const newErrors = { username: "", jobTitle: "" }
    let isValid = true

    // Name validation
    if (!formData.username) {
      newErrors.username = "Username is required"
      isValid = false
    }

    // Job title validation
    if (!formData.jobTitle) {
      newErrors.jobTitle = "Job title is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const validateAndSaveUserInfo = () => {
    const valid = validate()
    if (!valid) return

    saveUserInfo({ username: formData.username, jobTitle: formData.jobTitle })
    setUserInfo({ username: formData.username, jobTitle: formData.jobTitle })
    if (isBlocked) grantAccess()

    if (onHandleSubmitForm) onHandleSubmitForm()
  }

  const onSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    validateAndSaveUserInfo()
  }

  const onHandleKeyDownOnSubmit = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault()
      validateAndSaveUserInfo()
    }
  }

  return (
    <Center>
      <Box bg="bg" shadow="md" borderRadius="md" padding={4} width={500}>
        <Fieldset.Root size="lg" invalid>
          <Fieldset.Legend>{headingText}</Fieldset.Legend>
          <Fieldset.Content>
            <Field.Root orientation="horizontal" invalid={!!errors["username"]}>
              <Field.Label>Username</Field.Label>
              <Input
                placeholder="kate"
                flex="1"
                required
                value={formData.username}
                aria-label="username"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </Field.Root>

            <Field.Root orientation="horizontal" invalid={!!errors["jobTitle"]}>
              <Field.Label>Job title</Field.Label>
              <Input
                placeholder="Software Engineer"
                flex="1"
                required
                value={formData.jobTitle}
                aria-label="job-title"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))
                }
              />
            </Field.Root>
            {(!!errors["username"] || !!errors["jobTitle"]) && (
              <Fieldset.ErrorText>
                Some fields are invalid. Please check them.
              </Fieldset.ErrorText>
            )}

            <Field.Root orientation="horizontal">
              <Button
                variant="subtle"
                onClick={(e) => onSubmitForm(e)}
                onKeyDown={(e) => onHandleKeyDownOnSubmit(e)}
              >
                {submitText}
              </Button>
            </Field.Root>
          </Fieldset.Content>
        </Fieldset.Root>
      </Box>
    </Center>
  )
}

export default UserInfoForm
