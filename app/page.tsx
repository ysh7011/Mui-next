"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Box, TextField, Button, Typography, IconButton } from '@mui/material'
import { Lock, LockOpen} from '@mui/icons-material'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface UserForm {
  userId: string
  userPwd: string
}


export default function Home() {
  
  const[showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const {
    control,
    watch,
    formState,
    register,
    handleSubmit,
  } = useForm<UserForm>({
    mode: 'all',
    defaultValues: {
      userId: '',
      userPwd: '',
    }
  })
  const { userId, userPwd } = watch()
  console.log('userId', userId)
  console.log('userPwd', userPwd)
  const { errors } = formState

  const router = useRouter()

  const goToMember = handleSubmit(() => {
    router.push('/member')
  })

  console.log('dddddd')
  
  return (
    <div className={styles.layout}>
      <Box
        sx={{
          width: "390px",
          height: "300px",
          padding: "45px 25px",
          border: "1px solid #d9d9d9",
          borderRadius: "8px"
        }}
      >
        <Controller 
          name="userId"
          control={control}
          rules={{
            required: "id는 필수 입니다",
            minLength: {
              value: 2,
              message: "2글자 이상 입력 하세요",
            },
          }}
          render={({ fieldState }) => (
            <TextField 
              error={Boolean(fieldState.error)}
              required
              label="User Id (필수)"
              variant="standard"
              {...register('userId')}
              fullWidth
              helperText={(
                <Box
                  component="span"
                  visibility={fieldState.error ? "visible" : "hidden"}
                >
                  <span>
                    {fieldState.error?.message}
                  </span>
                </Box>
              )}
            />
          )}
        />
        <Box>
          <TextField 
            error={Boolean(errors.userPwd)}
            label="비밀번호 (선택)"
            variant="standard"
            {...register('userPwd')}
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <LockOpen /> : <Lock />}
                </IconButton>
              )
            }}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{mt: 5}}
          fullWidth
          onClick={goToMember}
        >
          시작하기
        </Button>
      </Box>
    </div>
  )
}
