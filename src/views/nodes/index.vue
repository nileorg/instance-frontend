<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Information" width="200">
        <template slot-scope="scope">
          {{ scope.row.information }}
        </template>
      </el-table-column>
      <el-table-column label="Components" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.components }}</span>
        </template>
      </el-table-column>
      <el-table-column label="resource" align="center">
        <template slot-scope="scope">
          {{ scope.row.resource }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.active | statusFilter" style="cursor: pointer;" @click.native.prevent="activate(scope.row.node_id, scope.row.active === 1 ? 0 : 1)">{{ scope.row.active === 1 ? 'Active' : 'Not active' }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList, activateNode } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    activate(node_id, active) {
      activateNode(node_id, active).then(response => {
        this.list.find(v => v.node_id === node_id).active = active
      })
    }
  }
}
</script>
