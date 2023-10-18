import { ColDef } from 'ag-grid-community'
import CustomSortHeader from '../CustomSortHeader'
import { AgGridReact } from 'ag-grid-react'

const StandardTable = ({
    rowData,
    columnDefs,
    pinnedBottomRowData,
}: {
    rowData: object[]
    columnDefs: ColDef[]
    pinnedBottomRowData: object[]
}) => {
    const gridOptions = {
        groupUseEntireRow: true,
        groupIncludeFooter: true,
        // Other grid options...
    }

    const defaultColDef = {
        sortable: true,
        flex: 1,
        cellStyle: {
            textAlign: 'right',
            fontWeight: '100',
            fontSize: '15px',
            paddingRight: '35px',
        },
        // resizable: true,
        suppressMovable: true,
        headerComponent: CustomSortHeader,
    }
    return (
        <div
            className="ag-theme-alpine"
            style={{
                height: '100%',
                width: '100%',
                border: '0px solid #dadada',
                boxShadow: 'none',
            }}
        >
            <AgGridReact
                gridOptions={gridOptions}
                domLayout="autoHeight"
                className="myCustomTable"
                defaultColDef={defaultColDef}
                rowData={rowData}
                columnDefs={columnDefs}
                pinnedBottomRowData={pinnedBottomRowData}
            ></AgGridReact>
        </div>
    )
}

export default StandardTable
