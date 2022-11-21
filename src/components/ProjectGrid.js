import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const cryptoImg = './public/assets/images/crypto-app.png'

const ProjectGrid = () => (
    <Grid>
        <Grid.Column width={4}>
            <Image src={cryptoImg} />
        </Grid.Column>
        <Grid.Column width={9}>
            <h3>Project 1</h3>
        <Image src='/images/wireframe/paragraph.png' />
            </Grid.Column>
    </Grid>
)
export default ProjectGrid