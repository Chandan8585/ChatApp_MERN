import { Stack } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/react'
import React from 'react'

const ChatSkeleton = () => {
  return (
    <div>
        <Stack> 
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
</Stack>
    </div>
  )
}

export default ChatSkeleton