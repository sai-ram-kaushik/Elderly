import React, { useState } from 'react'
import './Interest.css'
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

const Interestes = () => {

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const [chipData, setChipData] = useState([
        { key: 0, label: 'Swimming' },
        { key: 1, label: 'Writing' },
        { key: 2, label: 'Singing' },
        { key: 3, label: 'Dancing' },
        { key: 4, label: 'Photography' }
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <div className='interests'>
          <h4>Interests</h4>
            <div className="text">
                <div className="chips">

                    {chipData.map((data) => {
                        return (
                            <ListItem key={data.key} className="intrest_list">
                                <Chip
                                    label={data.label}
                                    // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                                    onDelete={ handleDelete(data)}
                                />
                            </ListItem>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Interestes