import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Button, Icon } from "native-base";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphql-prod.azurewebsites.net/graphql",
});

const { width, height } = Dimensions.get("window");
export default class Verficiation extends Component {
  data = async () => {
    console.log("i am called");
    let query = gql`
      mutation {
        createPatient(
          data: {
            name: "Patient"
            Health_Insurance_Company: 1
            Health_Membership_Number:"${
              this.props.route.params.item.membership
            }"
            Patient_Title: "${this.props.route.params.item.title}"
            Patient_Forenames: "${this.props.route.params.item.forename}"
            Patient_Surname: "${this.props.route.params.item.surname}"
            DOB: "${this.props.route.params.item.dob}"
            Address: "${this.props.route.params.item.address}"
            Phone_Number: "${this.props.route.params.item.phone_number}"
            Did_Patient_Elect_To_Be_Private_YesNo: "${
              this.props.route.params.item.private_patient == "1" ? "Yes" : "No"
            }"
            ts_Symptoms_First_Noticed:"${
              this.props.route.params.item.first_symtomps
            }"
            ts_Doctor_First_Consulted_MedHistory: "${
              this.props.route.params.item.first_consult
            }"
            Previously_Claimed_For_Illness_YesNo: "${
              this.props.route.params.item.related == "1" ? "Yes" : "No"
            }"
            ts_Date_When_Claimed_For_This_Illness_Before: "${
              this.props.route.params.item.related_date
            }"
            Name_Of_Doctor_Fisrt_Attended_Referral: "${
              this.props.route.params.item.name_of_doctor
            }"
            ts_Date_Of_Doctor_First_Attended_Referral: "${
              this.props.route.params.item.doctor_date
            }"
            Address_Of_Doctor_First_Attended_Referral: "${
              this.props.route.params.item.doctor_address
            }"
            Admission_IsResult_Of_Accident_YesNo: "${
              this.props.route.params.item.accident == "1" ? "Yes" : "No"
            }"
            ts_Date_of_Accident: "${this.props.route.params.item.accidentDate}"
            Where_Did_Accident_Injury_Occur: "${
              this.props.route.params.item.accidentPlace
            }"
            How_Did_Accident_Injury_Occur: "${
              this.props.route.params.item.accidentReason
            }"
            Was_Accident_Injury_Fault_of_Another_Party_YesNo: "${
              this.props.route.params.item.anotherParty == "1" ? "Yes" : "No"
            }"
            Contact_Information_of_Responsible_Party: "${
              this.props.route.params.item.defaulterName
            }"
            Responsible_Party_Insurance_Company_Information: "${
              this.props.route.params.item.insuranceCompany
            }"
            Are_You_Claiming_Expenses_Via_PIAB_YesNo: "${
              this.props.route.params.item.personalBoard == "1" ? "Yes" : "No"
            }"
            Are_You_Claiming_Expenses_Via_Solicitor_YesNo: "${
              this.props.route.params.item.solictorExpense == "1" ? "Yes" : "No"
            }"
            Name_Address_of_Solicitor_If_Applicable: "${
              this.props.route.params.item.solictorName
            }"
            Agreed_to_Declaration_Consent: "Yes"
            Agreed_to_Dataprotection: "Yes"
            Agreed_to_MedoSync_Information_Processing: "Yes"
            Patient_Signature: "${this.props.route.params.item.drawing}"
            ts_Date_Patient_Signature: "2020-05-27 20:18"
            PatientPaidByCashOrCard: "Cash"
            fever_or_Chills_YesNo: "${
              this.props.route.params.item.fever == "1" ? "Yes" : "No"
            }"
            cough_YesNo: "${
              this.props.route.params.item.cough == "1" ? "Yes" : "No"
            }"
            shortness_of_breath_YesNo: "${
              this.props.route.params.item.breath_short == "1" ? "Yes" : "No"
            }"
            flu_like_symptoms_YesNo: "${
              this.props.route.params.item.sore_throat == "1" ? "Yes" : "No"
            }"
            exposed_to_confirmed_Covid19_case_YesNo: "${
              this.props.route.params.item.confirmed == "1" ? "Yes" : "No"
            }"
            Travel_abroad_last_two_weeks_YesNo: "${
              this.props.route.params.item.travel == "1" ? "Yes" : "No"
            }"
            Worked_In_Covid19_Healthcare_facility_abroad_YesNo: "${
              this.props.route.params.item.healthcare == "1" ? "Yes" : "No"
            }"
            hospitalId: "1"
          }
        ) {
          patient {
            name
            id
            uuid
            Patient_Title
            Patient_Forenames
            Patient_Surname
            Health_Insurance_Company
            Health_Membership_Number
            MRN
            DOB
            Address
            Phone_Number
            Did_Patient_Elect_To_Be_Private_YesNo
            ts_Symptoms_First_Noticed
            ts_Doctor_First_Consulted_MedHistory
            ts_Date_When_Claimed_For_This_Illness_Before
            Name_Of_Doctor_Fisrt_Attended_Referral
            ts_Date_Of_Doctor_First_Attended_Referral
            Address_Of_Doctor_First_Attended_Referral
            Admission_IsResult_Of_Accident_YesNo
            ts_Date_of_Accident
            Was_Accident_Injury_Fault_of_Another_Party_YesNo
            Contact_Information_of_Responsible_Party
            Responsible_Party_Insurance_Company_Information
            Are_You_Claiming_Expenses_Via_PIAB_YesNo
            Are_You_Claiming_Expenses_Via_Solicitor_YesNo
            Name_Address_of_Solicitor_If_Applicable
            Patient_Signature
            ts_Date_Patient_Signature
            ts_Admit_Date
            ts_Discharge_Date
          }
        }
      }
    `;
    try {
      let data = await new ApolloClient({
        uri: "https://graphql-prod.azurewebsites.net/graphql",
        // headers: {
        //   "Content-Type": "application/json"
        // },
      }).mutate({ mutation: query });
      if (data) {
        this.props.navigation.navigate("Thanks", {
          signature: this.props.route.params.item.drawing,
        });
      }
    } catch (error) {
      console.log("data>>>>>>>>>>>error", error);

      alert(error);
    }
  };

  handleNext() {}
  render() {
    console.log(this.props.route.params.item.first_symtomps);
    //   const {} = this.props.route.params.item;
    return (
      <ScrollView contentContainerStyle={styles.Container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Membership Ship :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.membership)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>MRN Number :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.selected)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient Title :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.title)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient Surname :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.surname)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient forname :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.forename)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>DOB : </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.dob)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Address :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.address)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Phone number :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.phone_number)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Patient Private :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.private_patient) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Symtomps First Noticed :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.first_symtomps)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Doctor's First consulted Med History :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.first_consult)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Previously Claimed for illness
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.related) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Date when claimed for illness Before:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.related_date)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Name Of Doctor First Attended Referral: :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.doctor_name)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Date Of Doctor First Attended Referral:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.doctor_date)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Address Of Doctor First Attended Referral:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.doctor_address)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Admission_IsResult_Of_Accident_YesNo :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accident) == 0
              ? "NO"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>Date of Accident :</Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accidentDate)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Where Did Accident Injury Occur:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accidentPlace)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            How Did Accident Injury Occur:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.accidentReason)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Was Accident Injury Fault of Another Party:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.anotherParty) == -1
              ? ""
              : JSON.stringify(this.props.route.params.item.anotherParty) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Contact Information of Responsible Party:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.defaulterName)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Responsible Party_Insurance_Company_Information :
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.insuranceCompany)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Are You Claiming Expenses Via Solicitor:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.solictorExpense) == -1
              ? ""
              : JSON.stringify(this.props.route.params.item.solictorExpense) ==
                0
              ? "No"
              : "Yes"}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Are You Claiming Expenses Via PIAB:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.personalBoard) == -1
              ? ""
              : JSON.stringify(this.props.route.params.item.personalBoard) == 0
              ? "No"
              : "Yes"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, flex: 1 }}>
            Name Address of Solicitor If Applicable:
          </Text>
          <Text style={{ fontSize: 18, flex: 1 }}>
            {JSON.stringify(this.props.route.params.item.solictorName)}
          </Text>
        </View>
        <Text style={{ fontSize: 18 }}>
          You signature verifies that you have agreed to Laya's tearms and
          conditions as outlined in Section 5. i.e. Data Protection Statement
          and Declaration and Consent.
        </Text>
        <Image
          source={{ uri: this.props.route.params.item.drawing }}
          style={{ width: width - 20, height: 400, resizeMode: "center" }}
        />
        <View
          style={{
            margin: 10,
            alignItems: "flex-end",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
            primary
            onPress={() => this.data()}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Submit
            </Text>
            <Icon name="send" />
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 70,
  },
});
