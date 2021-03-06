interface DepCellInfo {
  hashType: CKBComponents.ScriptHashType
  codeHash: CKBComponents.Hash256
  outPoint: CKBComponents.OutPoint
}

interface CachedCell extends CKBComponents.CellIncludingOutPoint {
  status: string
  dataHash: string
}

interface TransactionBuilderInitParams {
  inputs?: CKBComponents.CellInput[]
  outputs?: CKBComponents.CellOutput[]
  cellDeps?: CKBComponents.CellDep[]
  headerDeps?: string[]
  witnesses?: string[]
}
