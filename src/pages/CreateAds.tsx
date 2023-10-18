import { Box, Typography } from '@mui/material'
import TextAdImg from '../images/TextAdImg.png'
import MediaAdImg from '../images/MediaAdImg.png'
import AdOptionBox from '../components/AdOptionBox'
import { Link } from 'react-router-dom'
import StandardContainer from '../components/layouts/StandardContainer'
import StandardButton from '../components/layouts/StandardButton'
import { useState } from 'react'
import AnimatedPage from '../components/layouts/AnimatedPage'

const CreateAds = () => {
    const [createAdType, setCreateAdType] = useState<'text' | 'media' | null>(
        null
    )
    const onSelection = (type: 'text' | 'media') => {
        setCreateAdType((prev) => {
            if (prev === type) {
                return null
            }
            return type
        })
    }
    return (
        <AnimatedPage>
            <StandardContainer>
                <Box
                    flex={1}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    gap={{
                        xs: '20px',
                        md: '30px',
                    }}
                >
                    <Box>
                        <Typography fontSize={'18px'}>Create Ads</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={{
                            xs: 'column',
                            md: 'row',
                        }}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'50px'}
                    >
                        <AdOptionBox
                            type={'text'}
                            checked={createAdType === 'text'}
                            onChecked={onSelection}
                            AdOptionImg={TextAdImg}
                            AdOptionText={'Text Ad'}
                        />
                        <AdOptionBox
                            type={'media'}
                            checked={createAdType === 'media'}
                            onChecked={onSelection}
                            AdOptionImg={MediaAdImg}
                            AdOptionText={'Media Ad'}
                        />
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Link to={`/create-ad-form/${createAdType}`}>
                            <StandardButton
                                displayText={'Next'}
                                disabled={!createAdType}
                            />
                        </Link>
                    </Box>
                </Box>
            </StandardContainer>
        </AnimatedPage>
    )
}

export default CreateAds
