import React, { useState, useEffect } from 'react'
import { Icon, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TextInput from '../../../../components/input/Input.jsx';
import AppSpinner from '../../../../components/appSpinner/AppSpinner.jsx';
import Button from '../../../../components/button/Button.jsx';
import {
  addRoad as addRoadAction,
  getRoads as getRoadAction,
  deleteRoad as deleteRoadAction
} from '../../../../redux/road/roadAction';
import DialogModal from '../../../../components/modal/DialogModal.jsx';

import './road.styles.scss';
const Road = ({ addRoad, getRoads, roadState, deleteRoad }) => {
  const [showForm, setShowForm] = useState(false);
  const [roadInput, setRoadInput] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedPayload, setDeletePayload] = useState("");
  const { loading, roads, error } = roadState;
  const handleInputChange = (e) => setRoadInput(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRoadInput("");
    addRoad({ title: roadInput });
  }
  // runs once the component get mounted
  useEffect(() => {
    getRoads();
  }, [])

  const onShowDeleteModal = (item) => {
    setDeletePayload(item);
    setShowDeleteModal(true)
  }
  const onDelete = (id) => {
    deleteRoad(id);
    return setShowDeleteModal(false)
  }

  return (
    <div className="road-page">
      <DialogModal
        open={showDeleteModal}
        payload={deletedPayload}
        closeHandler={() => setShowDeleteModal(false)}
        acceptHandler={onDelete}
        dialog="Are you sure you want to delete this road ?"
      />
      {!showForm && (
        <Button onClick={() => setShowForm(true)} className="toggle-add">Add Road</Button>
      )}
      {showForm && (
        <form onSubmit={handleFormSubmit} className="road-form">
          <Button onClick={() => setShowForm(false)} className="add-btn outline">Cancel</Button>
          <Button className="add-btn">Add</Button>
          <TextInput
            inputName="road"
            inputType="text"
            containerStyle="road-input"
            placeholder="Enter road name"
            onChange={handleInputChange}
            value={roadInput}
          />
        </form>
      )}
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Date Created</Table.HeaderCell>
            <Table.HeaderCell>Date Modified</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {roads.length > 0 && (
            roads.map(({ title, created_at, updated_at, id }) => {
              const dtCreated = new Date(created_at);
              const dtUpdate = new Date(updated_at);
              return (
                <Table.Row key={id}>
                  <Table.Cell>{title}</Table.Cell>
                  <Table.Cell>{dtCreated.toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{dtUpdate.toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => onShowDeleteModal({ title, id })} className="btn-action red">Delete</Button>
                    {" "}
                    <Button className="btn-action blue">Edit</Button>
                  </Table.Cell>
                </Table.Row>
              )
            }))
          }
        </Table.Body>
      </Table>
      {loading && <AppSpinner />}
    </div>
  )
}

const mapStateToProps = state => ({
  roadState: state.road
});

const mapDispatchToProps = {
  getRoads: getRoadAction,
  addRoad: addRoadAction,
  deleteRoad: deleteRoadAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Road);