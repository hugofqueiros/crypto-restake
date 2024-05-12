import { useState } from "react";
import Image from "next/image";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Button } from "@/components";
import { data } from "@/utils/data";
import { StakingModal } from "./StakingModal";
import { UnStakingModal } from "./UnStakingModal";

export const CryptoTable = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openUnStakingModal, setOpenUnStakingModal] = useState(false);
    const [modalData, setModalData] = useState({
        name: "",
        staked: 0,
        available: 0,
        shortName: "",
    });

    const handleOpenModal = (
        name: string,
        staked: number,
        available: number,
        shortName: string
    ) => {
        setModalData({
            name,
            staked,
            available,
            shortName,
        });
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleUnstakingOpenModal = (
        name: string,
        staked: number,
        available: number,
        shortName: string
    ) => {
        setModalData({
            name,
            staked,
            available,
            shortName,
        });
        setOpenUnStakingModal(true);
    };

    const handleUnstakingCloseModal = () => {
        setOpenUnStakingModal(false);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Token</TableCell>
                            <TableCell align="right">Stacked</TableCell>
                            <TableCell align="right">Available</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        paddingBottom: "20px",
                                    }}
                                >
                                    <Image
                                        alt="Remy Sharp"
                                        src={row.image}
                                        height={25}
                                    />
                                    <Typography
                                        component="h2"
                                        variant="h6"
                                        sx={{ paddingLeft: "10px" }}
                                    >
                                        {row.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    {row.staked}
                                </TableCell>
                                <TableCell align="right">
                                    {row.available}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        disabled={row.available === 0}
                                        onClick={() =>
                                            handleOpenModal(
                                                row.name,
                                                row.staked,
                                                row.available,
                                                row.shortName
                                            )
                                        }
                                    >
                                        Stake
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        disabled={row.staked === 0}
                                        onClick={() =>
                                            handleUnstakingOpenModal(
                                                row.name,
                                                row.staked,
                                                row.available,
                                                row.shortName
                                            )
                                        }
                                    >
                                        Unstake
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <StakingModal
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                data={modalData}
            />
            <UnStakingModal
                openModal={openUnStakingModal}
                handleCloseModal={handleUnstakingCloseModal}
                data={modalData}
            />
        </>
    );
};
