import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    Typography
} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {ISearchForm} from "@/data/interfaces/ISearchForm";

interface IProps {
    onSubmitForm: SubmitHandler<ISearchForm>;
    locations: string[];
    isLoadingLocations: boolean;
}

export const SearchForm = ({onSubmitForm, locations, isLoadingLocations}: IProps) => {
    const {
        handleSubmit,
        register,
        control,
    } = useForm();

    return (
        <>
            <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
                <Typography>Search Form</Typography>
                <Divider sx={{mt: 2, mb: 2}}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={6}>
                        <FormGroup>
                            <FormLabel component="legend">
                                Select disk space size (GB):
                            </FormLabel>
                            <Controller
                                defaultValue={0}
                                control={control}
                                render={(props) => (
                                    <Slider
                                        {...props}
                                        min={0}
                                        max={72000}
                                        valueLabelDisplay="auto"
                                        value={props.field.value}
                                        onChange={props.field.onChange}
                                    />
                                )}
                                name={'storage'}
                            />

                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} xl={6}>
                        <Box sx={{display: 'flex'}}>
                            <FormControl sx={{ml: 3}} component="fieldset" variant="standard" fullWidth>
                                <FormLabel component="legend">RAM Memory:</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="2GB"
                                        label="2GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="4GB"
                                        label="4GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="8GB"
                                        label="8GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="12GB"
                                        label="12GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="16GB"
                                        label="16GB"
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl component="fieldset" variant="standard" fullWidth>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="24GB"
                                        label="24GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="32GB"
                                        label="32GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="48GB"
                                        label="48GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="64GB"
                                        label="64GB"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox {...register('ram')} />
                                        }
                                        value="96GB"
                                        label="96GB"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} xl={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">HardDisk Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={''}
                                label="HardDisk Type"
                                {...register('hard_disk_type')}
                            >
                                <MenuItem value={'SAS'}>SAS</MenuItem>
                                <MenuItem value={'SATA'}>SATA</MenuItem>
                                <MenuItem value={'SSD'}>SSD</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} xl={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Server Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Server Location"
                                {...register('location')}
                                disabled={isLoadingLocations}
                            >
                                {locations?.map((value, key) => {
                                    return (
                                        <MenuItem key={key} value={value}>{value}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item alignItems={'end'}>
                        <Button type="submit" variant="contained" disabled={isLoadingLocations}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>);
}